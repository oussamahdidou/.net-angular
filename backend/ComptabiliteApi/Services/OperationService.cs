using ComptabiliteAPi.DATA;
using ComptabiliteAPi.Dto_s;
using ComptabiliteAPi.Models;
using ComptabiliteAPi.VModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

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

        public async Task<(int,List<AccountingDto>,string)> GetOperationsAll(string CompanyId)
        {
            try {


                return (1,new List<AccountingDto>(),"success");
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

        public async Task<(int, string)> CreateOperations(string OperateurId, string CompanyId, OperationDto operationDto)
        {
            try
            {


                Facture facture = new Facture()
                {
                    Id = operationDto.Id_Facture,
                    PrixTVA = operationDto.PrixTVA,
                    PrixHT = operationDto.PrixHT,
                    Quantite = operationDto.Quantite,
                    id_company = CompanyId,
                    Name = operationDto.FactureName,
                    id_operateur = OperateurId,
                    PrixUnitaire = operationDto.PrixUnitaire,
                };
            
                databContext.Factures.Add(facture);

                await databContext.SaveChangesAsync();


                return (1, "success");
            }
        catch(Exception ex)
            {
                return(0, ex.ToString());
            }
        }
    }
}
