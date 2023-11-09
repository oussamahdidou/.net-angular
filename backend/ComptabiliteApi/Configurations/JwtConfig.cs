using Microsoft.AspNetCore.DataProtection;

namespace ComptabiliteAPi.Configurations
{
    public class JwtConfig
    {
        public String Secret {  get; set; } =string.Empty;
    }
}
