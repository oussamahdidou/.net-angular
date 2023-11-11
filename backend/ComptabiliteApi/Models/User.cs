using Microsoft.AspNetCore.Identity;

namespace ComptabiliteAPi.Models
{
    public class User:IdentityUser
    {
        public required string Token { get; set; }
    }
}
