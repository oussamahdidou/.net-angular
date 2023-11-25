using ComptabiliteAPi.Configurations;
using ComptabiliteAPi.DATA;
using ComptabiliteAPi.Models;
using ComptabiliteAPi.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<JwtConfig>(builder.Configuration.GetSection(key: "JwtConfig"));
builder.Services.AddControllers();
builder.Services.AddTransient<IAuthService, AuthService>();
builder.Services.AddTransient<IOperationService, OperationService>();
builder.Services.AddDbContext<DatabContext>(options =>
{

    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
;
});
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOriginPolicy", builder =>
    {
        builder.WithOrigins("http://localhost:4200") // Replace with your Angular app's origin
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddIdentity<User, IdentityRole>(options =>
{
}).AddEntityFrameworkStores<DatabContext>();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
})

// Adding Jwt Bearer  
            .AddJwtBearer(options =>
            {
                options.SaveToken = true;
                options.RequireHttpsMetadata = false;
                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidAudience = builder.Configuration["JWT:ValidAudience"],
                    ValidIssuer = builder.Configuration["JWT:ValidIssuer"],
                    ClockSkew = TimeSpan.Zero,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Secret"]))
                };
            });

var app = builder.Build();
//Seed Config
if (args.Length >= 2 && args[0].Length == 1 && args[1].ToLower() == "seeddata")
{
    await Seed.SeedUsersAndRolesAsync(app);
}
else
{
    Console.WriteLine("Invalid arguments or missing command.");
}
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors("AllowOriginPolicy"); // Place this before UseAuthorization
app.UseAuthorization();
app.UseAuthentication();
app.MapControllers();
app.UseEndpoints(endpoints =>
{
    // Map controllers
    endpoints.MapControllers();

    // Map specific routes for your controller actions
    endpoints.MapControllerRoute(
        name: "authentication",
        pattern: "api/authentication/login",
        defaults: new { controller = "Authentication", action = "Login" });

    endpoints.MapControllerRoute(
        name: "registration",
        pattern: "api/authentication/registration",  // Corrected typo here
        defaults: new { controller = "Authentication", action = "Register" });

    endpoints.MapControllerRoute(
        name: "GetOperations",
        pattern: "api/Accounting/GetOperations",  // Assuming it's in the Accounting controller
        defaults: new { controller = "Accounting", action = "GetOperations" });

    // Additional endpoint mappings as needed...
});

app.Run();
