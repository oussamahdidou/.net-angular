using api.Data;
using api.Dto;
using api.Interfaces;
using api.Mappers;
using api.Models;

namespace api.Repositories
{
    public class FormRepository : IFormRepository
    {
        private readonly AppDbContext appDbContext;

        public FormRepository(AppDbContext appDbContext)
        {
            this.appDbContext = appDbContext;
        }

        public async Task<Formulaire> CreateFormulaireAsync(CreateFormDto createFormDto, string AppUserId)
        {
            Formulaire? formulaire = createFormDto.CreateDtoToModel(AppUserId);
            await appDbContext.Formulaires.AddAsync(formulaire);
            await appDbContext.SaveChangesAsync();
            return formulaire;

        }

        public Task<List<Formulaire>> GetAllFormulairesAsync()
        {
            throw new NotImplementedException();
        }

        public Task<Formulaire> GetFormulaireByIdAsync(string id)
        {
            throw new NotImplementedException();
        }
    }
}
