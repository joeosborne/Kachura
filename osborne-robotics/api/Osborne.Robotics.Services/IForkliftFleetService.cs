namespace Osborne.Robotics.Services
{
    public interface IForkliftFleetService
    {
        //IList<Forklift> GetForkliftFleet();
        Task<IList<Forklift>> GetForkliftFleet();

        Task<bool> ReplaceForkliftFleet(IList<Forklift> fleet);
    }
}