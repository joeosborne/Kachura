﻿
public class ForkliftRepository : IForkliftRepository
{
    private List<Forklift> _forklifts = new();


    public Task<bool> CreateAsync(Forklift forklift)
    {
        _forklifts.Add(forklift);
        return Task.FromResult(true);
    }

    public Task<bool> ReplaceFleetAsync(IList<Forklift> forklifts)
    {
        _forklifts = forklifts.ToList();
        return Task.FromResult(true);
    }

    public Task<IEnumerable<Forklift>> GetAllAsync()
    {
        return Task.FromResult(_forklifts.AsEnumerable());
    }

    public Task<Forklift?> GetByModelNumberAsync(string modelNumber)
    {
        var forklift = _forklifts.SingleOrDefault(x => x.ModelNumber == modelNumber);
        return Task.FromResult(forklift);
    }
}
