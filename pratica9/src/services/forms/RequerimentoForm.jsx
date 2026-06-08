import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { cadastrarRequerimento } from '../../services/requerimentoService';
import './RequerimentoForm.css';

const RequerimentoForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await cadastrarRequerimento(data);
    reset();
    navigate('/requerimentos');
  };

  return (
    <div className="requerimento-form-container">
      <h2>Novo Requerimento</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Tipo de Requerimento</label>
          <select
            {...register("tipo", { required: "Tipo é obrigatório" })}
            className={errors.tipo ? "error" : ""}
          >
            <option value="">Selecione um tipo...</option>
            <option value="Matrícula">Matrícula</option>
            <option value="Cancelamento">Cancelamento</option>
            <option value="Solicitação">Solicitação</option>
          </select>
          {errors.tipo && <span className="error-message">{errors.tipo.message}</span>}
        </div>

        <div className="form-group">
          <label>Descrição</label>
          <textarea
            {...register("descricao", {
              required: "Descrição é obrigatório",
              minLength: {
                value: 10,
                message: "Descrição deve ter no mínimo 10 caracteres"
              }
            })}
            className={errors.descricao ? "error" : ""}
            placeholder="Digite a descrição do requerimento..."
          />
          {errors.descricao && <span className="error-message">{errors.descricao.message}</span>}
        </div>

        <div className="form-group">
          <label>Data do Requerimento</label>
          <input
            type="date"
            {...register("data")}
            defaultValue={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-button" onClick={() => navigate('/requerimentos')}>Cancelar</button>
          <button type="submit" className="submit-button">Salvar</button>
        </div>
      </form>
    </div>
  );
};

export default RequerimentoForm;