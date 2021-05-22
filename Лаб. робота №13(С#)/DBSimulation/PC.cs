using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBSimulation
{
    class PC
    {
        
        public string the_name_of_the_subject { get; set; }
        public string Number_of_hours { get; set; }

        public string Teacher { get; set; }


        private double _rating;
        public double rating
        {
            get
            {
                return _rating;
            }
            set
            {
                if (value >= 0)
                    _rating = value;
                else
                    throw new Exception("Рейтинг не може бути відємним");
            }
        }

      

        public PC(string the_name_of_the_subject, string Number_of_hours, string Teacher, double rating)
        {
            this.the_name_of_the_subject = the_name_of_the_subject;
            this.Number_of_hours = Number_of_hours;
            this.Teacher = Teacher;
            this.rating = rating;

        }

    }
}
