using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Formulaire
    {
        [Key]
        public string Id { get; set; }
        public string? AppUserId { get; set; }
        public AppUser? AppUser { get; set; }
        List<Input> Inputs { get; set; } = new List<Input>();
        List<Submit> Submits { get; set; } = new List<Submit>();
    }
}
