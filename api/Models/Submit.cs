namespace api.Models
{
    public class Submit
    {
        public string? AppUserId { get; set; }
        public string? FormulaireId { get; set; }
        public AppUser? AppUser { get; set; }
        public Formulaire? Formulaire { get; set; }
    }
}
