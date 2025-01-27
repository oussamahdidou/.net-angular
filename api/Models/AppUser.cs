using Microsoft.AspNetCore.Identity;

namespace api.Models
{
    public class AppUser : IdentityUser
    {
        public List<Formulaire> Formulaires { get; set; } = new List<Formulaire>();
    }
}
