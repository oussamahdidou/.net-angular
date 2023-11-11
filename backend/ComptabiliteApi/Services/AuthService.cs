using ComptabiliteAPi.DATA;
using ComptabiliteAPi.Models;
using ComptabiliteAPi.VModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ComptabiliteAPi.Services
{
  
        public class AuthService : IAuthService
        {
            private readonly UserManager<User> userManager;
            private readonly RoleManager<IdentityRole> roleManager;
            private readonly IConfiguration _configuration;
        private readonly DatabContext databContext;
            public AuthService(UserManager<User> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration,DatabContext databContext)
            {
                this.userManager = userManager;
                this.roleManager = roleManager;
            _configuration = configuration;
            this.databContext = databContext;

            }
            public async Task<(int, string)> Registeration(RegistrationModel model)
            {
                var userExists = await userManager.FindByNameAsync(model.username);
                if (userExists != null)
                    return (0, "User already exists");

                var user = new User()
                {
                    Email = model.mail,
                    SecurityStamp = Guid.NewGuid().ToString(),
                    UserName = model.username,
                    Token="Null"
                    
                };
                var createUserResult = await userManager.CreateAsync(user, model.password);
                if (!createUserResult.Succeeded)
                    return (0, "User creation failed! Please check user details and try again.");

                if (!await roleManager.RoleExistsAsync(UserRoles.Comptable))
                    await roleManager.CreateAsync(new IdentityRole(UserRoles.Comptable));

                if (await roleManager.RoleExistsAsync(UserRoles.Comptable))
                    await userManager.AddToRoleAsync(user, UserRoles.Comptable);
                databContext.SaveChangesAsync();
                return (1, "User created successfully!");
            }

            public async Task<(int, string)> Login(LoginModel model)
            {
                var user = await userManager.FindByNameAsync(model.Username);
                if (user == null)
                    return (0, "Invalid username");
                if (!await userManager.CheckPasswordAsync(user, model.Password))
                    return (0, "Invalid password");

                var userRoles = await userManager.GetRolesAsync(user);
                var authClaims = new List<Claim>
            {
               new Claim(ClaimTypes.Name, user.UserName),
               new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

                foreach (var userRole in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                }
                string token = GenerateToken(authClaims);
                return (1, token);
            }


            private string GenerateToken(IEnumerable<Claim> claims)
            {
                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Issuer = _configuration["JWT:ValidIssuer"],
                    Audience = _configuration["JWT:ValidAudience"],
                    Expires = DateTime.UtcNow.AddHours(3),
                    SigningCredentials = new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256),
                    Subject = new ClaimsIdentity(claims)
                };

                var tokenHandler = new JwtSecurityTokenHandler();
                var token = tokenHandler.CreateToken(tokenDescriptor);
                return tokenHandler.WriteToken(token);
            }
        }
    }

