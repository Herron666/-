using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBSimulation
{
    class PcDatabase
    {
        private List<PC> _Db = new List<PC>();

        //додати
        public void Add(PC Pc)
        {
            _Db.Add(Pc);
        }

        //вилучити
        public void Remove(PC Pc)
        {
            _Db.Remove(Pc);
        }

        //дізнатись кількість записів в базі
        public int Count
        {
            get
            {
                return _Db.Count;
            }
        }

        public List<PC> Query(Func<PC, bool>  condition)
        {
            return _Db.Where(condition).ToList();
        }

        public List<PC> GetAll()
        {
            return this._Db;
        }

        public PC GetByIndex(int index)
        {
            return this._Db[index];
        }
    }
}
