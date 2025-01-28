using System.ComponentModel.DataAnnotations;

namespace api.Dto
{
    public class RegistrationDto
    {
        [Required]
        public string? Username { get; set; }
        [Required]
        [EmailAddress]
        public string? EmailAddress { get; set; }
        [Required]
        public string? Password { get; set; }
    }
}
