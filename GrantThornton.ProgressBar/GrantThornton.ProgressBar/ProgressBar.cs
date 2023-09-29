using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Activities;
using System.ComponentModel;

namespace GrantThornton.ProgressBar
{
    public class ProgressBar : CodeActivity
    {
        [Category("Input")]
        [RequiredArgument]
        public InArgument<double> CurrentValue { get; set; }

        [Category("Input")]
        [RequiredArgument]
        public InArgument<double> TotalValue { get; set; }

        [Category("Input")]
        [RequiredArgument]
        public InArgument<string> Description { get; set; }

        [Category("Input")]
        public InArgument<String> Title { get; set; }

        private static FormProgressBar _form;
        protected override void Execute(CodeActivityContext context)
        {
            var valuep = (CurrentValue.Get(context)*100)/TotalValue.Get(context);
            var descriptionp = Description.Get(context);
            var titlep = Title.Get(context);

            if (_form == null)
            {
                _form = new FormProgressBar();
            }

            _form.set_value(valuep);
            _form.set_descripcion(descriptionp);


            if (titlep != null) {
                if (!titlep.Equals("")) {
                    _form.set_title(titlep.ToString());
                }
            }

            if (valuep <= 100)
            {
                _form.Show();
            }
            else {
                _form.Close();
                _form = null;
            }
           

        }
    }
}
