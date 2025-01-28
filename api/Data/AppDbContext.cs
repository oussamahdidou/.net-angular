using api.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class AppDbContext : IdentityDbContext<AppUser>
    {
        public AppDbContext(DbContextOptions dbContextOptions)
        : base(dbContextOptions)
        {

        }
        public DbSet<Response> Responses { get; set; }
        public DbSet<Submit> Submits { get; set; }
        public DbSet<Input> Inputs { get; set; }
        public DbSet<Formulaire> Formulaires { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<Submit>(x => x.HasKey(p => new { p.AppUserId, p.FormulaireId }));
            builder.Entity<Submit>()
            .HasOne(u => u.AppUser)
            .WithMany(u => u.Submits)
            .HasForeignKey(p => p.AppUserId);
            builder.Entity<Submit>()
            .HasOne(u => u.Formulaire)
            .WithMany(u => u.Submits)
            .HasForeignKey(p => p.FormulaireId);
            builder.Entity<Response>(x => x.HasKey(p => new { p.AppUserId, p.InputId }));
            builder.Entity<Response>()
            .HasOne(u => u.AppUser)
            .WithMany(u => u.Responses)
            .HasForeignKey(p => p.AppUserId);
            builder.Entity<Response>()
            .HasOne(u => u.Input)
            .WithMany(u => u.Responses)
            .HasForeignKey(p => p.InputId);
        }
    }
}

