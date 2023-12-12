

using ComptabiliteAPi.Dto_s;
using ComptabiliteAPi.Models;
using ComptabiliteAPi.VModels;

namespace ComptabiliteAPi.Services
{
    public interface IOperationService
    {
        Task<(int,List<AccountingDto>, string)> GetOperationsAll(string CompanyId);
        Task<(int, OperationComptable)> FindOneOperation(string CompanyId,int OperationId);
        Task<(int, string)> CreateOperations(string OperateurId,string CompanyId,OperationDto operationDto);
       
    }
}
