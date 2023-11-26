

using ComptabiliteAPi.Models;
using ComptabiliteAPi.VModels;

namespace ComptabiliteAPi.Services
{
    public interface IOperationService
    {
        Task<(int,List<OperationComptable>, string)> GetOperationsAll(string CompanyId);
        Task<(int, OperationComptable)> FindOneOperation(string CompanyId,int OperationId);
        Task<(int, string)> CreateOperations(string CompanyId,OperationDto operationDto);
       
    }
}
