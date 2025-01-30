using api.Data;
using api.Dto;
using api.Interfaces;
using api.Mappers;
using api.Models;
using Microsoft.EntityFrameworkCore;

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

        public async Task<List<Formulaire>> GetAllFormulairesAsync(string Id)
        {
            return await appDbContext.Formulaires.Where(x => x.AppUserId == Id).ToListAsync();
        }

        public async Task<Formulaire> GetFormulaireByIdAsync(string id)
        {
            return await appDbContext.Formulaires.FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
