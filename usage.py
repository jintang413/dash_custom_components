import dash_custom_components as dcc
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
from datetime import datetime as dt
app = dash.Dash(__name__)

app.layout = html.Div([
    # dcc.DemoComponent(
    #     id='input',
    #     value='my-value',
    #     label='my-label'
    # ),
    dcc.DatePickerComponent(
        id='s_dt',
        label='Start Date',
    ),
    html.Div(id='output'),
])


@app.callback(Output('output', 'children'), [Input('s_dt', 'value')])
def display_output(value):
    return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
