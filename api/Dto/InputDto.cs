using System.ComponentModel.DataAnnotations;

namespace api.Dto
{
    public class InputDto
    {
        [Required]
        public string Label { get; set; }
        [Required]
        public string Type { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Placeholder { get; set; }
        public string DefaultValue { get; set; }
        public bool Required { get; set; } = false;
        public List<string> Options { get; set; } = new List<string>();
    }
}
