namespace Osborne.Robotics.Services
{
    public interface IForkliftFleetService
    {
        IList<Forklift> GetForkliftFleet();
    }
}