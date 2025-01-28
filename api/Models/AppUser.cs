using Microsoft.AspNetCore.Identity;

namespace api.Models
{
    public class AppUser : IdentityUser
    {
        public List<Formulaire> Formulaires { get; set; } = new List<Formulaire>();
        public List<Submit> Submits { get; set; } = new List<Submit>();
        public List<Response> Responses { get; set; } = new List<Response>();
    }
}
