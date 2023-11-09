using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ComptabiliteAPi.Models
{
    public class OperationComptable
    {
        [Key]
        int Id { get; set; }
        string? compte_debiteurs { get; set; }
        int code_compte_debiteurs { get; set; }
        string? compte_crediteurs {  get; set; }
        int code_compte_crediteurs { get; set; }
        int id_Facure { get; set; }


    }
}
