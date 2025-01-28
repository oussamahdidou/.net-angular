using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Formulaire
    {
        [Key]
        public string Id { get; set; }
        public string? AppUserId { get; set; }
        public AppUser? AppUser { get; set; }
        public List<Input> Inputs { get; set; } = new List<Input>();
        public List<Submit> Submits { get; set; } = new List<Submit>();
    }
}
