namespace api.Models
{
    public class Response
    {
        public string? AppUserId { get; set; }
        public AppUser? AppUser { get; set; }
        public string? InputId { get; set; }
        public Input? Input { get; set; }
        public string? Valeur { get; set; }
    }
}
