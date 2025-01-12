using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Win32;
using Osborne.Robotics.Services;
using System;
using System.Runtime.CompilerServices;
using System.Text.Json;


namespace Osborne.Robotics.Services
{
    public interface IForkliftFleetService
    {
        //IList<Forklift> GetForkliftFleet();
        Task<IList<Forklift>> GetForkliftFleet();

        Task<bool> ReplaceForkliftFleet(IList<Forklift> fleet);
    }
}