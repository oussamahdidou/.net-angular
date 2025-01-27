using api.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class DbContext : IdentityDbContext<AppUser>
    {
        public DbContext(DbContextOptions dbContextOptions)
        : base(dbContextOptions)
        {

        }
    }
}

