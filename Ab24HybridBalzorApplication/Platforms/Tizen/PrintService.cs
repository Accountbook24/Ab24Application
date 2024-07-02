using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ab24HybridBalzorApplication
{
    public partial class PrintService
    {
        public partial bool CanPrint()
        {
            return false;
        }

        public partial Task PrintFile(Stream fileStream, string fileName, object platformSpecificInput)
        {

            throw new NotImplementedException();
        }

    }
}
