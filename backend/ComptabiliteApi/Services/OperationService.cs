using ComptabiliteAPi.DATA;
using ComptabiliteAPi.Models;
using ComptabiliteAPi.VModels;
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

        public async Task<(int,List<OperationComptable>,string)> GetOperationsAll(string CompanyId)
        {
            try { 
            List<OperationComptable> operations=databContext.Operations.Where(x=>x.id_company==CompanyId).ToList();
            return(1,operations,"success");
            }
            catch (Exception ex)
            {
                return (0, null, ex.ToString());
            }
        }

        public async Task<(int, OperationComptable)> FindOneOperation(string CompanyId, int OperationId)
        {
            return (0, new OperationComptable());
        }

        public async Task<(int, string)> CreateOperations(string CompanyId, OperationDto operationDto)
        {
            return (0, "");
        }
    }
}
