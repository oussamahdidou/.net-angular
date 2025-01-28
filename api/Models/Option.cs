using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Option
    {
        [Key]
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Value { get; set; }
        public Input? Input { get; set; }
        public string InputId { get; set; }
    }
}
