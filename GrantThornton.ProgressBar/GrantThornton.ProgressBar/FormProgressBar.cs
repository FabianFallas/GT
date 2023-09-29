using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace GrantThornton.ProgressBar
{
    public partial class FormProgressBar : Form
    {   

        public FormProgressBar()
        {
            InitializeComponent();
        }

        private void FormProgressBar_Load(object sender, EventArgs e)
        {

        }

        public void set_value(double value) {
            progressBar.Value = (int)value;
        }

        public void set_descripcion(string value)
        {
            lblDescripcion.Text = value;
        }

        public void set_title(string title) {
            lblTitulo.Text = title;
        }
    }
}
