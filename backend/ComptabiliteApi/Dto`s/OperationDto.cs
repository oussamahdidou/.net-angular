namespace ComptabiliteAPi.VModels
{
    public class OperationDto
    {
        public string? Description { get; set; }
        public DateTime? date { get; set; } = DateTime.Now;
        public string? Id_Facture { get; set; }
        public string? Name { get; set; }
        public float? PrixUnitaire { get; set; }
        public int Quantite { get; set; }
        public float PrixHT { get; set; }
        public float PrixTVA { get; set; }
     
    }
}
