using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ComptabiliteAPi.Models
{
    public class OperationComptable
    {
        [Key]
        public  string Id { get; set; }
        public string? id_company { get; set; }
        public string? compte_debiteurs { get; set; }
        public int code_compte_debiteurs { get; set; }
        public string? compte_crediteurs {  get; set; }
        public int code_compte_crediteurs { get; set; }
      //  public int id_Facure { get; set; }
        public bool? est_comptabilise {  get; set; }
        public string? Description { get; set; }
        public DateTime? date { get; set; }= DateTime.Now;


    }
}
