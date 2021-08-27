import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { dias, meses, anos, estadoCivil, sexo } from './utils/selectOptions';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h4>DADOS PESSOAIS</h4>

        <hr />

        <form>
          <div className="row  mt-4">
            <div className="col-md">
              <div className="form-group">
                <label htmlFor="nome">
                  Nome Completo <span className="required">*</span>
                </label>
                <input type="text" className="form-control" id="nome" />
              </div>
            </div>

            <div className="col-md">
              <div className="form-group">
                <label htmlFor="cargo">Cargo Pretendido</label>
                <input type="text" className="form-control" id="cargo" />
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-sm">
              <div className="form-group">
                <label htmlFor="data">
                  Data de Nascimento <span className="required">*</span>
                </label>
                <div id="data">
                  <div className="row">
                    <div className="col">
                      <select name="dia" id="dia" className="form-select">
                        <option value=""></option>
                        {dias.map((dia) => (
                          <option value={dia.value}>{dia.text}</option>
                        ))}
                      </select>
                      <small id="dayHelp" class="form-text text-muted">
                        Dia
                      </small>
                    </div>
                    <div className="col">
                      <select name="" id="mes" className="form-select">
                        <option value=""></option>
                        {meses.map((mes) => (
                          <option value={mes.value}>{mes.text}</option>
                        ))}
                      </select>
                      <small id="monthHelp" class="form-text text-muted">
                        Mês
                      </small>
                    </div>
                    <div className="col">
                      <select name="" id="ano" className="form-select">
                        <option value=""></option>
                        {anos.map((ano) => (
                          <option value={ano.value}>{ano.text}</option>
                        ))}
                      </select>
                      <small id="yearHelp" class="form-text text-muted">
                        Ano
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm">
              <div className="form-group">
                <label htmlFor="estado-civil">Estado Civil</label>
                <select
                  name="estado-civil"
                  id="estado-civil"
                  className="form-select"
                >
                  <option value=""></option>
                  {estadoCivil.map((el) => (
                    <option value={el.value}>{el.text}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col">
              <div className="form-group">
                <label htmlFor="endereco">
                  Endereço <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="endereco"
                  placeholder="ex. Nome da Rua, 56. Bloco 2, AP 301"
                />
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-sm">
              <div className="form-group">
                <label htmlFor="bairro">
                  Bairro <span className="required">*</span>
                </label>
                <input type="text" className="form-control" id="bairro" />
              </div>
            </div>

            <div className="col-sm">
              <div className="form-group">
                <label htmlFor="cidade">
                  Cidade <span className="required">*</span>
                </label>
                <input type="text" className="form-control" id="cidade" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
