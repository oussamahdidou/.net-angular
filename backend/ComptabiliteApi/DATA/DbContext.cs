using ComptabiliteAPi.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using static System.Net.Mime.MediaTypeNames;

namespace ComptabiliteAPi.DATA
{
    public class DatabContext : IdentityDbContext<User>
    {
        public DatabContext(DbContextOptions<DatabContext> options) : base(options)
        {

        }
        public DbSet<Company> Companies { get; set; }
        public DbSet<Facture> Factures { get; set; }
        public DbSet<OperationComptable> OperationComptables { get; set; }
        public DbSet<Operation> Operations {  get; set; }
        public DbSet<Comptabilisation> Comptabilisations { get; set; }

    }
}
