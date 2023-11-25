using ComptabiliteAPi.DATA;
using ComptabiliteAPi.Models;

using Microsoft.AspNetCore.Identity;

namespace ComptabiliteAPi.Services
{
    public class OperationService:IOperationService
    {
        private readonly UserManager<User> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IConfiguration _configuration;
        private readonly DatabContext databContext;
        public OperationService(UserManager<User> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration, DatabContext databContext)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
            _configuration = configuration;
            this.databContext = databContext;

        }

        public async Task<(int,string)> GetOperationsAll(string CompanyId)
        {
           
            return (0, "GetOperationszrztsxr");
        }

        public async Task<(int, string)> FindOneOperation(string CompanyId, int OperationId)
        {
            return (0, "");
        }

   
    }
}
