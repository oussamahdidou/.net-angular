using System.ComponentModel.DataAnnotations;

namespace ComptabiliteAPi.Models
{
    public class Facture
    {
        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public float? PrixUnitaire { get; set; }
        public int Quantite { get; set; }
        public float PrixHT {  get; set; }
        public float PrixTVA { get; set;}
        public DateTime? FactureDate { get; set; }
        public string? id_company {  get; set; }
        public string? id_operateur {  get; set; }


    }
}