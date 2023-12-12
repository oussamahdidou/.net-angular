using ComptabiliteAPi.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace ComptabiliteAPi.DATA
{
    public class Seed
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new DatabContext(serviceProvider.GetRequiredService<DbContextOptions<DatabContext>>()))
            {
                //
            }

        }
        public static async Task SeedUsersAndRolesAsync(IApplicationBuilder applicationBuilder)
        {
            using (var serviceScope = applicationBuilder.ApplicationServices.CreateScope())
            {
                //Roles
                var RoleManager = serviceScope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
                if (!await RoleManager.RoleExistsAsync(UserRoles.Operateur))
                {
                    await RoleManager.CreateAsync(new IdentityRole(UserRoles.Operateur));
                }
                if (!await RoleManager.RoleExistsAsync(UserRoles.Comptable))
                {
                    await RoleManager.CreateAsync(new IdentityRole(UserRoles.Comptable));
                }
                //Users
                var usermanager = serviceScope.ServiceProvider.GetService<UserManager<User>>();
                //Admins
                string adminuserEmail = "oussamahdidou15@gmail.com";
                var adminUser = await usermanager.FindByEmailAsync(adminuserEmail);
                if (adminUser == null)
                {
                    var newadminUser = new User()
                    {
                        UserName = "oussamahdidou",
                        Email = adminuserEmail,
                        EmailConfirmed = true,
                        id_company="string"

                    };
                    await usermanager.CreateAsync(newadminUser, "Coding@1234?");
                    await usermanager.AddToRoleAsync(newadminUser, UserRoles.Operateur);
                }
                //Students
                string studentuserEmail = "oussamahdidou223@gmail.com";
                var studentUser = await usermanager.FindByEmailAsync(studentuserEmail);
                if (studentUser == null)
                {
                    var newstudentUser = new User()
                    {
                        UserName = "oussamahdidou2",
                        Email = studentuserEmail,
                        EmailConfirmed = true,
                        id_company = "string"

                    };
                    await usermanager.CreateAsync(newstudentUser, "Coding@1234?");
                    await usermanager.AddToRoleAsync(newstudentUser, UserRoles.Comptable);
                }
            }
        }
    }
}
