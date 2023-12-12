using System.ComponentModel.DataAnnotations;

namespace ComptabiliteAPi.Models
{
    public class Company
    {
        [Key]
        public string? Lei { get; set; }
        public string? Name { get; set; }
        public ICollection<User> Operators { get; set; }
        public ICollection<User> Comptables { get; set; }
        public ICollection<User> admins { get; set; }
        public ICollection<Facture> Factures { get; set; }
        public ICollection<Operation> operations { get; set; }
        public ICollection<OperationComptable> OperationComptables { get; set; }

    }
}
