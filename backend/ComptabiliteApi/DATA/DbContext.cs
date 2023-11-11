using ComptabiliteAPi.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ComptabiliteAPi.DATA
{
    public class DatabContext : IdentityDbContext<User>
    {
        public DatabContext(DbContextOptions<DatabContext> options) : base(options)
        {

        }

    }
}
