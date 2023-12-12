using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ComptabiliteAPi.Models
{
    public class Facture
    {
        [Key]
        public string? Id { get; set; }
        public string? Name { get; set; }
        public string? Descrition {  get; set; }
        public float? PrixUnitaire { get; set; }
        public int Quantite { get; set; }
        public float PrixHT {  get; set; }
        public float PrixTVA { get; set;}
        public Company Company { get; set; }
        [ForeignKey(nameof(Company))]
        public string? id_company {  get; set; }
        public User Operator { get; set; }
        [ForeignKey(nameof(User))]
        public string? id_operateur {  get; set; }

        public ICollection<Operation> operations{ get; set; }
        public ICollection<OperationComptable> OperationComptables { get; set; }
    }
}