using Microsoft.AspNetCore.Identity;

namespace ComptabiliteAPi.Models
{
    public class User:IdentityUser
    {
        public required string id_company { get; set; }
    }
}
