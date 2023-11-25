

namespace ComptabiliteAPi.Services
{
    public interface IOperationService
    {
        Task<(int, string)> GetOperationsAll(string CompanyId);
        Task<(int, string)> FindOneOperation(string CompanyId,int OperationId);
       
    }
}
