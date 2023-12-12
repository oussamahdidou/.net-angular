namespace ComptabiliteAPi.Dto_s
{
    public class AccountingDto
    {
        public string ?Id { get; set; }
        public List<string>? Id_Facture { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public DateTime? date { get; set; } = DateTime.Now;
    }
}
