
public interface IForkliftRepository
{
    Task<bool> CreateAsync(Forklift forklift);

    Task<bool> ReplaceFleetAsync(IList<Forklift> forklifts);

    Task<Forklift?> GetByModelNumberAsync(string modelNumber);
    
    Task<IEnumerable<Forklift>> GetAllAsync();
}
