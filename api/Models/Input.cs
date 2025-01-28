using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Input
    {
        [Key]
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Label { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Placeholder { get; set; } = string.Empty;
        public string DefaultValue { get; set; } = string.Empty;
        public bool Required { get; set; }
        public string? FormulaireId { get; set; }
        public Formulaire? Formulaire { get; set; }
        public List<Response> Responses { get; set; } = new List<Response>();
        public List<Option> Options { get; set; } = new List<Option>();

    }
}
