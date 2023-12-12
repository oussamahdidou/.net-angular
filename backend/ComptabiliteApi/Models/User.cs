using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace ComptabiliteAPi.Models
{
    public class User:IdentityUser
    {
        [ForeignKey("Company")]
        public required string id_company { get; set; }
        public required Company Company { get; set; }
    }
}
