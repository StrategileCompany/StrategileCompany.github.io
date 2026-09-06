import type { CSSProperties, ReactNode } from 'react';
import { StatusBar } from './IphoneFrame';

/**
 * Telas-mock dos produtos, desenhadas no canvas lógico 390×844 do IphoneFrame.
 * Cada uma reproduz a tela principal real do app — cores, componentes e layout
 * extraídos do código-fonte de cada produto.
 */

const SYS = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';

const screen: CSSProperties = {
  width: 390,
  height: 844,
  display: 'flex',
  flexDirection: 'column',
  fontFamily: SYS,
  overflow: 'hidden',
};

function Row({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return <div style={{ display: 'flex', alignItems: 'center', ...style }}>{children}</div>;
}

/* ————————————————— TaMarkado — Agenda ————————————————— */

function TamarkadoScreen() {
  const days = [
    { d: 'seg', n: 8 },
    { d: 'ter', n: 9 },
    { d: 'qua', n: 10 },
    { d: 'qui', n: 11, active: true },
    { d: 'sex', n: 12 },
    { d: 'sáb', n: 13 },
    { d: 'dom', n: 14 },
  ];
  const stats = [
    { v: 12, l: 'Agendados', c: '#3B82F6' },
    { v: 8, l: 'Confirmados', c: '#10B981' },
    { v: 3, l: 'Pendentes', c: '#F59E0B' },
    { v: 5, l: 'Livres', c: '#8B5CF6' },
  ];
  const items = [
    { h: '09:00', m: '45 min', n: 'Mariana Costa', s: 'Corte + escova', ok: true },
    { h: '10:30', m: '1h 15', n: 'Paulo Henrique', s: 'Barba e cabelo', ok: true },
    { h: '14:00', m: '30 min', n: 'Júlia Ramos', s: 'Manicure', ok: false },
  ];
  return (
    <div style={{ ...screen, background: '#F9FAFB' }}>
      <StatusBar />
      <div style={{ padding: '8px 20px 0' }}>
        <Row style={{ justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#0F172A', letterSpacing: -0.5 }}>Agenda</div>
            <div style={{ fontSize: 14, color: '#6B7280', marginTop: 2 }}>quinta, 11 de junho</div>
          </div>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            G
          </div>
        </Row>
        <Row style={{ gap: 8, marginTop: 18 }}>
          {days.map((day) => (
            <div
              key={day.d}
              style={{
                flex: 1,
                height: 62,
                borderRadius: 16,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                background: day.active ? '#3B82F6' : '#FFFFFF',
                color: day.active ? '#fff' : '#6B7280',
                boxShadow: day.active ? '0 8px 18px rgba(59,130,246,0.35)' : '0 1px 2px rgba(15,23,42,0.05)',
              }}
            >
              <span style={{ fontSize: 11 }}>{day.d}</span>
              <span style={{ fontSize: 16, fontWeight: 700, color: day.active ? '#fff' : '#0F172A' }}>{day.n}</span>
            </div>
          ))}
        </Row>
        <Row style={{ gap: 8, marginTop: 14 }}>
          {stats.map((s) => (
            <div
              key={s.l}
              style={{ flex: 1, background: '#fff', borderRadius: 12, padding: '10px 0', textAlign: 'center', boxShadow: '0 1px 2px rgba(15,23,42,0.05)' }}
            >
              <div style={{ fontSize: 20, fontWeight: 800, color: s.c }}>{s.v}</div>
              <div style={{ fontSize: 10, color: '#6B7280', marginTop: 1 }}>{s.l}</div>
            </div>
          ))}
        </Row>
        <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {items.map((it) => (
            <Row key={it.h} style={{ background: '#fff', borderRadius: 16, padding: 14, gap: 14, boxShadow: '0 1px 3px rgba(15,23,42,0.06)' }}>
              <div style={{ background: '#EFF6FF', borderRadius: 12, padding: '8px 12px', textAlign: 'center', minWidth: 64 }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: '#2563EB' }}>{it.h}</div>
                <div style={{ fontSize: 10, color: '#93A5BD' }}>{it.m}</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#0F172A' }}>{it.n}</div>
                <div style={{ fontSize: 13, color: '#6B7280', marginTop: 1 }}>{it.s}</div>
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  padding: '5px 10px',
                  borderRadius: 999,
                  background: it.ok ? '#D1FAE5' : '#FEF3C7',
                  color: it.ok ? '#047857' : '#B45309',
                }}
              >
                {it.ok ? 'Confirmado' : 'Pendente'}
              </div>
            </Row>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 'auto', height: 84, background: 'rgba(255,255,255,0.92)', borderTop: '1px solid #EEF1F5', display: 'flex', alignItems: 'center', justifyContent: 'space-around', paddingBottom: 14 }}>
        <div style={{ textAlign: 'center', color: '#9CA3AF' }}>
          <div style={{ fontSize: 19 }}>👥</div>
          <div style={{ fontSize: 10, marginTop: 1 }}>Clientes</div>
        </div>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: 'linear-gradient(135deg,#3B82F6,#2563EB)',
            color: '#fff',
            fontSize: 28,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 22px rgba(37,99,235,0.4)',
            marginTop: -22,
          }}
        >
          +
        </div>
        <div style={{ textAlign: 'center', color: '#9CA3AF' }}>
          <div style={{ fontSize: 19 }}>💬</div>
          <div style={{ fontSize: 10, marginTop: 1 }}>Mensagens</div>
        </div>
      </div>
    </div>
  );
}

/* ————————————————— Xpid — Dashboard ————————————————— */

function XpidScreen() {
  const metrics = [
    { l: 'FATURAMENTO', v: 'R$ 8.450', c: '#2563EB' },
    { l: 'LUCRO LÍQUIDO', v: 'R$ 2.730', c: '#16A34A' },
    { l: 'DESPESAS', v: 'R$ 940', c: '#DC2626' },
    { l: 'VENDAS', v: '67', c: '#1F2937' },
  ];
  const sales = [
    { n: 'Dona Lúcia', d: '11 jun', v: 'R$ 186,00', s: 'Confirmada', bg: '#DCFCE7', fg: '#15803D' },
    { n: 'Mercadinho São José', d: '11 jun', v: 'R$ 412,50', s: 'Confirmada', bg: '#DCFCE7', fg: '#15803D' },
    { n: 'Seu Antônio', d: '10 jun', v: 'R$ 94,00', s: 'Crediário', bg: '#FEF3C7', fg: '#B45309' },
  ];
  return (
    <div style={{ ...screen, background: '#F9FAFB' }}>
      <div style={{ background: '#2563EB' }}>
        <StatusBar dark />
        <div style={{ padding: '6px 20px 14px' }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#fff' }}>Xpid</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', marginTop: 1 }}>Junho de 2026</div>
        </div>
      </div>
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div
          style={{
            height: 54,
            borderRadius: 12,
            background: '#2563EB',
            color: '#fff',
            fontSize: 16,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            boxShadow: '0 10px 20px rgba(37,99,235,0.28)',
          }}
        >
          <span style={{ fontSize: 20, fontWeight: 600 }}>+</span> Nova venda
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {metrics.map((m) => (
            <div key={m.l} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: '12px 14px' }}>
              <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: 0.6, color: '#6B7280' }}>{m.l}</div>
              <div style={{ fontSize: 21, fontWeight: 800, color: m.c, marginTop: 4 }}>{m.v}</div>
            </div>
          ))}
        </div>
        <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: '12px 14px' }}>
          <Row style={{ justifyContent: 'space-between' }}>
            <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: 0.6, color: '#6B7280' }}>RECEBIDO VS A RECEBER</span>
          </Row>
          <div style={{ height: 8, borderRadius: 999, background: '#E5E7EB', marginTop: 10, overflow: 'hidden' }}>
            <div style={{ width: '68%', height: '100%', borderRadius: 999, background: '#22C55E' }} />
          </div>
          <Row style={{ justifyContent: 'space-between', marginTop: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#16A34A' }}>R$ 5.740</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#6B7280' }}>R$ 2.710</span>
          </Row>
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#1F2937', margin: '4px 2px 8px' }}>Últimas vendas</div>
          <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, overflow: 'hidden' }}>
            {sales.map((s, i) => (
              <Row key={s.n} style={{ padding: '12px 14px', borderTop: i ? '1px solid #F3F4F6' : 'none', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#1F2937' }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 1 }}>{s.d}</div>
                </div>
                <Row style={{ gap: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#1F2937' }}>{s.v}</span>
                  <span style={{ fontSize: 10.5, fontWeight: 700, padding: '4px 8px', borderRadius: 999, background: s.bg, color: s.fg }}>{s.s}</span>
                </Row>
              </Row>
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: 'auto', height: 80, background: '#fff', borderTop: '1px solid #E5E7EB', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-around', paddingTop: 10 }}>
        {[
          { i: '📈', l: 'Início', on: true },
          { i: '🛒', l: 'Vendas' },
          { i: '👥', l: 'Clientes' },
          { i: '☰', l: 'Menu' },
        ].map((t) => (
          <div key={t.l} style={{ textAlign: 'center', color: t.on ? '#2563EB' : '#9CA3AF' }}>
            <div style={{ fontSize: 18 }}>{t.i}</div>
            <div style={{ fontSize: 10, fontWeight: t.on ? 700 : 500, marginTop: 1 }}>{t.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ————————————————— CAMADA — Chat ————————————————— */

function CamadaScreen() {
  return (
    <div style={{ ...screen, background: '#040C12' }}>
      <StatusBar dark />
      <Row style={{ padding: '8px 16px 12px', justifyContent: 'space-between', borderBottom: '1px solid rgba(107,223,235,0.12)' }}>
        <Row style={{ gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#34D399', boxShadow: '0 0 8px rgba(52,211,153,0.8)' }} />
          <span style={{ fontSize: 13, color: 'rgba(242,251,254,0.85)', fontWeight: 600 }}>Agente · Pet Center Matriz</span>
        </Row>
        <span style={{ fontSize: 10.5, fontWeight: 700, color: '#34D399', border: '1px solid rgba(52,211,153,0.4)', borderRadius: 999, padding: '3px 9px', letterSpacing: 0.5 }}>
          ONLINE
        </span>
      </Row>
      <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ alignSelf: 'flex-end', maxWidth: 280, background: '#6BDFEB', color: '#04222A', fontSize: 14, fontWeight: 500, padding: '11px 14px', borderRadius: '16px 16px 6px 16px' }}>
          Qual foi o faturamento de maio, por loja?
        </div>
        <Row style={{ gap: 10, alignItems: 'flex-start' }}>
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'rgba(245,158,11,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, flexShrink: 0 }}>
            ✦
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
            <div style={{ background: '#162128', color: '#E6F4F8', fontSize: 13.5, lineHeight: 1.5, padding: '11px 14px', borderRadius: '16px 16px 16px 6px' }}>
              Maio fechou em <strong style={{ color: '#6BDFEB' }}>R$ 412.380</strong> nas três lojas. A Centro puxou 46% do total.
            </div>
            <div style={{ background: '#0A1319', border: '1px solid #1E2D38', borderRadius: 10, overflow: 'hidden' }}>
              <Row style={{ padding: '7px 12px', gap: 6, borderBottom: '1px solid #16222C' }}>
                <span style={{ color: '#F59E0B', fontSize: 11 }}>‹/›</span>
                <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 1.2, color: '#F59E0B' }}>SQL GERADO</span>
              </Row>
              <div style={{ padding: '10px 12px', fontFamily: MONO, fontSize: 10.5, lineHeight: 1.6, color: '#9FB6C1' }}>
                <span style={{ color: '#6BDFEB' }}>SELECT</span> loja, SUM(vl_total)
                <br />
                <span style={{ color: '#6BDFEB' }}>FROM</span> nfe_saida
                <br />
                <span style={{ color: '#6BDFEB' }}>WHERE</span> dt_emissao ~ &apos;2026-05&apos;
                <br />
                <span style={{ color: '#6BDFEB' }}>GROUP BY</span> loja
              </div>
            </div>
            <div style={{ background: '#0A1319', border: '1px solid #1E2D38', borderRadius: 10, overflow: 'hidden' }}>
              <div style={{ padding: '7px 12px', fontSize: 10, fontWeight: 700, letterSpacing: 0.8, color: '#7E99A8', borderBottom: '1px solid #16222C' }}>
                RESULTADO · 3 REGISTROS
              </div>
              {[
                ['Centro', 'R$ 189.694'],
                ['Norte', 'R$ 124.510'],
                ['Sul', 'R$ 98.176'],
              ].map(([loja, valor], i) => (
                <Row key={loja} style={{ padding: '8px 12px', justifyContent: 'space-between', background: i % 2 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                  <span style={{ fontSize: 12, color: '#C8DCE4' }}>{loja}</span>
                  <span style={{ fontSize: 12, fontFamily: MONO, color: '#F2FBFE' }}>{valor}</span>
                </Row>
              ))}
            </div>
            <Row style={{ gap: 8 }}>
              <span style={{ fontSize: 10, color: '#7E99A8', border: '1px solid #1E2D38', borderRadius: 6, padding: '3px 8px' }}>▥ barras</span>
              <span style={{ fontSize: 10, color: '#7E99A8', border: '1px solid #1E2D38', borderRadius: 6, padding: '3px 8px' }}>◷ 247 ms</span>
            </Row>
          </div>
        </Row>
      </div>
      <Row style={{ padding: '12px 16px 28px', gap: 10 }}>
        <div style={{ flex: 1, height: 46, borderRadius: 14, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(107,223,235,0.15)', display: 'flex', alignItems: 'center', padding: '0 16px', fontSize: 13.5, color: 'rgba(242,251,254,0.4)' }}>
          Pergunte em português…
        </div>
        <div style={{ width: 46, height: 46, borderRadius: 12, background: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, color: '#1A1205' }}>
          ➤
        </div>
      </Row>
    </div>
  );
}

/* ————————————————— Roteiro Temporada — Início ————————————————— */

function RoteiroScreen() {
  return (
    <div style={{ ...screen, background: '#F2F2F7' }}>
      <StatusBar />
      <div style={{ padding: '8px 20px', flex: 1 }}>
        <Row style={{ justifyContent: 'space-between' }}>
          <div style={{ fontSize: 26, fontWeight: 800, color: '#0F172A', letterSpacing: -0.4 }}>Boa tarde, Rafael</div>
          <span style={{ fontSize: 19, color: '#8E8E93' }}>⚙</span>
        </Row>
        <Row style={{ justifyContent: 'center', marginTop: 14 }}>
          <Row style={{ background: '#fff', borderRadius: 999, padding: '8px 18px', gap: 16, boxShadow: '0 1px 3px rgba(15,23,42,0.07)' }}>
            <span style={{ color: '#007AFF', fontSize: 14 }}>‹</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#0F172A' }}>Junho 2026</span>
            <span style={{ color: '#007AFF', fontSize: 14 }}>›</span>
          </Row>
        </Row>
        <div
          style={{
            marginTop: 16,
            borderRadius: 20,
            padding: 20,
            background: 'linear-gradient(135deg, #18181B 0%, #1F2937 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', top: -50, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'radial-gradient(circle, rgba(52,211,153,0.22), transparent 70%)' }} />
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, color: '#A1A1AA' }}>RESULTADO — JUNHO</div>
          <Row style={{ gap: 10, marginTop: 8 }}>
            <span style={{ fontSize: 32, fontWeight: 800, color: '#34D399', letterSpacing: -0.5 }}>R$ 12.450</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#34D399', background: 'rgba(52,211,153,0.14)', borderRadius: 999, padding: '4px 10px' }}>
              ↗ +18%
            </span>
          </Row>
          <Row style={{ marginTop: 16, gap: 0 }}>
            {[
              ['PREVISTO', 'R$ 15.200'],
              ['RECEBIDO', 'R$ 12.450'],
              ['RESERVAS', '14'],
            ].map(([l, v], i) => (
              <div key={l} style={{ flex: 1, borderLeft: i ? '1px solid rgba(255,255,255,0.08)' : 'none', paddingLeft: i ? 14 : 0 }}>
                <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 0.8, color: '#71717A' }}>{l}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#FAFAFA', marginTop: 3 }}>{v}</div>
              </div>
            ))}
          </Row>
        </div>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.8, color: '#6B7280', margin: '20px 2px 10px' }}>PRÓXIMAS RESERVAS</div>
        {[
          { n: 'Apto Vista Mar', d: '12 – 16 jun · 4 noites', b1: 'Check-in amanhã', c1: '#007AFF', bg1: 'rgba(0,122,255,0.1)', b2: 'Pago', c2: '#34C759', bg2: 'rgba(52,199,89,0.12)' },
          { n: 'Casa da Serra', d: '14 – 18 jun · 4 noites', b1: 'Booking', c1: '#5856D6', bg1: 'rgba(88,86,214,0.1)', b2: 'Pendente', c2: '#FF9500', bg2: 'rgba(255,149,0,0.12)' },
        ].map((r) => (
          <Row key={r.n} style={{ background: '#fff', borderRadius: 16, padding: 16, marginBottom: 10, justifyContent: 'space-between', boxShadow: '0 1px 3px rgba(15,23,42,0.06)' }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#0F172A' }}>{r.n}</div>
              <div style={{ fontSize: 12.5, color: '#6B7280', marginTop: 2 }}>{r.d}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'flex-end' }}>
              <span style={{ fontSize: 10.5, fontWeight: 700, color: r.c1, background: r.bg1, borderRadius: 999, padding: '3px 9px' }}>{r.b1}</span>
              <span style={{ fontSize: 10.5, fontWeight: 700, color: r.c2, background: r.bg2, borderRadius: 999, padding: '3px 9px' }}>{r.b2}</span>
            </div>
          </Row>
        ))}
      </div>
      <div style={{ height: 84, background: 'rgba(255,255,255,0.95)', borderTop: '1px solid #E5E5EA', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-around', paddingTop: 9 }}>
        {[
          { i: '⌂', l: 'Início', on: true },
          { i: '🗒', l: 'Reservas' },
          { i: '▦', l: 'Calendário' },
          { i: '$', l: 'Financeiro' },
          { i: '👥', l: 'Pessoas' },
        ].map((t) => (
          <div key={t.l} style={{ textAlign: 'center', color: t.on ? '#007AFF' : '#8E8E93', minWidth: 56 }}>
            <div style={{ fontSize: 17 }}>{t.i}</div>
            <div style={{ fontSize: 9.5, fontWeight: t.on ? 700 : 500, marginTop: 1 }}>{t.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ————————————————— Strategile — Metas (app Flutter real) ————————————————— */

function StrategileScreen() {
  const kpis = [
    { l: '% DESCONTO', v: '4,2%', c: '#007AFF' },
    { l: 'ITENS/VENDA', v: '3,8', c: '#30D158' },
    { l: 'TICKET MÉDIO', v: 'R$ 186', c: '#FF9F0A' },
    { l: 'VENDAS', v: '127', c: '#64D2FF' },
  ];
  return (
    <div style={{ ...screen, background: '#0A0A0F' }}>
      <StatusBar dark />
      <div style={{ padding: '6px 18px', flex: 1 }}>
        <Row style={{ gap: 8 }}>
          {['Junho', 'Loja Centro', 'Carlos'].map((f) => (
            <span key={f} style={{ fontSize: 11.5, color: '#9CA3AF', background: '#1E1E2A', borderRadius: 999, padding: '6px 12px', fontWeight: 600 }}>
              {f} ▾
            </span>
          ))}
        </Row>
        <div style={{ marginTop: 14, borderRadius: 18, padding: '18px 18px 14px', background: 'linear-gradient(160deg,#1A1A2E 0%,#0A0A0F 100%)', border: '1px solid rgba(34,211,238,0.12)' }}>
          <div style={{ fontSize: 13, color: '#9CA3AF' }}>Boa tarde,</div>
          <div style={{ fontSize: 19, fontWeight: 800, color: '#F8FAFC', marginTop: 1 }}>Carlos</div>
          <Row style={{ marginTop: 12, gap: 18 }}>
            <div>
              <div style={{ fontSize: 30, fontWeight: 800, color: '#F8FAFC', letterSpacing: -0.6 }}>R$ 84.320</div>
              <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 3 }}>faturado no mês</div>
            </div>
            {/* gauge semicircular */}
            <svg width="110" height="62" viewBox="0 0 110 62" style={{ marginLeft: 'auto' }}>
              <path d="M10 56 A45 45 0 0 1 100 56" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="9" strokeLinecap="round" />
              <path d="M10 56 A45 45 0 0 1 91.5 33.5" fill="none" stroke="#22D3EE" strokeWidth="9" strokeLinecap="round" />
              <circle cx="91.5" cy="33.5" r="6" fill="#22D3EE" opacity="0.95" />
              <text x="55" y="54" textAnchor="middle" fontSize="15" fontWeight="800" fill="#22D3EE" fontFamily={SYS}>
                87%
              </text>
            </svg>
          </Row>
          <div style={{ marginTop: 10, background: 'rgba(48,209,88,0.1)', border: '1px solid rgba(48,209,88,0.25)', borderRadius: 12, padding: '9px 12px', fontSize: 12.5, color: '#30D158', fontWeight: 600 }}>
            ✅ Meta 1 atingida — projeção alcança a Meta 2
          </div>
        </div>
        <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {kpis.map((k) => (
            <div key={k.l} style={{ background: '#1E1E2A', borderRadius: 14, padding: '12px 14px' }}>
              <Row style={{ gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: 3, background: k.c }} />
                <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 0.8, color: '#9CA3AF' }}>{k.l}</span>
              </Row>
              <div style={{ fontSize: 20, fontWeight: 800, color: '#F8FAFC', marginTop: 6 }}>{k.v}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 12, background: '#1E1E2A', borderRadius: 14, padding: '14px 16px' }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, color: '#9CA3AF' }}>RANKING DO MÊS</div>
          {[
            { m: '🥇', n: 'Carlos', v: 'R$ 84,3 mil' },
            { m: '🥈', n: 'Fernanda', v: 'R$ 79,1 mil' },
            { m: '🥉', n: 'Diego', v: 'R$ 71,8 mil' },
          ].map((r) => (
            <Row key={r.n} style={{ justifyContent: 'space-between', marginTop: 10 }}>
              <Row style={{ gap: 8 }}>
                <span style={{ fontSize: 14 }}>{r.m}</span>
                <span style={{ fontSize: 13.5, fontWeight: 600, color: '#E5E7EB' }}>{r.n}</span>
              </Row>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#9CA3AF' }}>{r.v}</span>
            </Row>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ————————————————— AppIgreja — Devocional (tela real do app) ————————————————— */

function IgrejaScreen() {
  const tabs = [
    { l: 'Hoje', on: true },
    { l: 'Histórico', on: false },
    { l: 'Favoritos', on: false },
  ];
  const nav = [
    { i: '📖', l: 'Devocionais', on: true },
    { i: '👥', l: 'GC', on: false },
    { i: '🗓', l: 'Agenda', on: false },
    { i: '🎁', l: 'Ofertas', on: false },
    { i: '🙏', l: 'Oração', on: false },
    { i: '👤', l: 'Perfil', on: false },
  ];
  return (
    <div style={{ ...screen, background: '#0B1220' }}>
      <StatusBar dark />
      {/* header da igreja */}
      <Row style={{ padding: '4px 16px 10px', gap: 10 }}>
        <div style={{ width: 40, height: 40, borderRadius: 11, background: '#16202F', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="24" height="20" viewBox="0 0 24 20" fill="#F2F7FB">
            <rect x="10.6" y="2" width="2.8" height="15" rx="1.2" />
            <rect x="7" y="5.4" width="10" height="2.6" rx="1.2" />
            <rect x="3.4" y="7" width="2.2" height="10" rx="1" />
            <rect x="1" y="9.6" width="7" height="2.1" rx="1" />
            <rect x="18.4" y="7" width="2.2" height="10" rx="1" />
            <rect x="16" y="9.6" width="7" height="2.1" rx="1" />
          </svg>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ fontSize: 16.5, fontWeight: 800, color: '#4D9FE8', letterSpacing: -0.2 }}>Batista Jeruel Cabo Frio</div>
          <div style={{ fontSize: 11, color: '#93A3B5', marginTop: 1 }}>Convenção Batista Jeruel</div>
        </div>
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <span style={{ fontSize: 19, color: '#F2F7FB' }}>🔔</span>
          <span style={{ position: 'absolute', top: -5, right: -7, minWidth: 16, height: 16, borderRadius: 999, background: '#E0455A', color: '#fff', fontSize: 9.5, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 3px' }}>
            6
          </span>
        </div>
      </Row>
      <Row style={{ justifyContent: 'center', paddingBottom: 10 }}>
        <Row style={{ gap: 7, border: '1px solid rgba(110,231,183,0.35)', borderRadius: 999, padding: '7px 16px', background: 'rgba(255,255,255,0.03)' }}>
          <span style={{ fontSize: 11, color: '#6EE7B7' }}>▦</span>
          <span style={{ fontSize: 12.5, fontWeight: 600, color: '#E6EFF7' }}>Painel administrativo</span>
        </Row>
      </Row>
      {/* abas */}
      <div style={{ padding: '4px 14px 0' }}>
        <Row style={{ background: '#111B29', borderRadius: 12, padding: 4 }}>
          {tabs.map((tab) => (
            <div
              key={tab.l}
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '8px 0',
                borderRadius: 9,
                fontSize: 13,
                fontWeight: tab.on ? 700 : 500,
                color: tab.on ? '#F2F7FB' : '#93A3B5',
                background: tab.on ? '#1D2B3F' : 'transparent',
              }}
            >
              {tab.l}
            </div>
          ))}
        </Row>
      </div>
      {/* card do devocional */}
      <div style={{ margin: '12px 14px 0', flex: 1, overflow: 'hidden', background: '#131E2E', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: '14px 16px' }}>
        <div style={{ fontSize: 11, color: '#7E8FA3' }}>11 de junho</div>
        <div style={{ fontSize: 18.5, fontWeight: 800, color: '#F2F7FB', marginTop: 6, letterSpacing: -0.2 }}>
          Deus Trabalha no Secreto
        </div>
        <div style={{ fontSize: 12.5, lineHeight: 1.55, color: '#A8B6C7', marginTop: 8 }}>
          Mateus 6:6 Mas, quando você orar, vá para seu quarto, feche a porta e ore a seu Pai,
          que está em secreto. Então seu Pai, que vê em secreto, o recompensará.
        </div>
        {/* imagem do devocional — pôr do sol quente com serifada */}
        <div
          style={{
            marginTop: 12,
            height: 150,
            borderRadius: 10,
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(160deg, #F7E3B4 0%, #EFC07A 38%, #C97F45 72%, #8A5430 100%)',
          }}
        >
          <div style={{ position: 'absolute', left: '14%', top: '30%', width: 70, height: 70, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,250,235,0.95) 0%, rgba(255,240,205,0.4) 45%, transparent 70%)' }} />
          {/* livro aberto em silhueta */}
          <svg width="92" height="34" viewBox="0 0 92 34" style={{ position: 'absolute', left: 12, bottom: 8, opacity: 0.55 }}>
            <path d="M46 8 C36 2 16 1 4 5 V28 C16 24 36 25 46 31 C56 25 76 24 88 28 V5 C76 1 56 2 46 8 Z" fill="#5C3A1E" />
          </svg>
          <div style={{ position: 'absolute', right: 14, top: 18, textAlign: 'right', fontFamily: 'Georgia, serif', color: '#6B4419', fontStyle: 'italic' }}>
            <div style={{ fontSize: 21, lineHeight: 1.15 }}>Deus</div>
            <div style={{ fontSize: 21, lineHeight: 1.15 }}>Trabalha no</div>
            <div style={{ fontSize: 27, fontWeight: 700, lineHeight: 1.2 }}>Secreto</div>
          </div>
        </div>
        <div style={{ fontSize: 12.5, lineHeight: 1.6, color: '#C9D4E0', marginTop: 12 }}>
          Vivemos em um tempo em que muita gente valoriza o que aparece.
        </div>
        <div style={{ fontSize: 12.5, lineHeight: 1.6, color: '#C9D4E0', marginTop: 7 }}>
          O que é visto recebe atenção, elogio e reconhecimento.
        </div>
        <div style={{ fontSize: 12.5, lineHeight: 1.6, color: '#C9D4E0', marginTop: 7 }}>
          Mas Deus também trabalha em lugares onde ninguém está olhando.
        </div>
        <div style={{ fontSize: 12.5, lineHeight: 1.6, color: '#C9D4E0', marginTop: 7 }}>
          Jesus nos ensina que existe algo precioso no secreto.
        </div>
      </div>
      {/* bottom nav */}
      <div style={{ height: 76, background: '#0E1726', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-around', paddingTop: 9 }}>
        {nav.map((t) => (
          <div key={t.l} style={{ textAlign: 'center', color: t.on ? '#34D3A6' : '#8DA0B5', minWidth: 50 }}>
            <div style={{ fontSize: 15, filter: t.on ? 'none' : 'grayscale(1) brightness(1.4)' }}>{t.i}</div>
            <div style={{ fontSize: 9, fontWeight: t.on ? 700 : 500, marginTop: 1 }}>{t.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ————————————————— SmartScan — Conferência (PWA real, teal + dourado) ————————————————— */

function SmartScanScreen() {
  const stats = [
    { l: 'CÓDIGOS', v: '12/40', badge: '+2' },
    { l: 'QUANTIDADE', v: '18/40', badge: '' },
    { l: 'CONFERIDOS', v: '30%', badge: '' },
  ];
  const itens = [
    { n: 'Ração Premier 15 kg', cod: '7891000311', q: 'x12', edge: '#16A34A' },
    { n: 'Coleira ajustável M', cod: '7896024711', q: 'x8', edge: '#16A34A' },
    { n: 'Shampoo neutro 500 ml', cod: '7891150022', q: 'x5', edge: '#D97706' },
  ];
  return (
    <div style={{ ...screen, background: '#F8FAFC' }}>
      <StatusBar />
      <div style={{ padding: '6px 18px', flex: 1 }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: '#0F172A', letterSpacing: -0.4 }}>Conferência</div>
        <div style={{ fontSize: 12.5, color: '#475569', marginTop: 2 }}>NF-e 84.321 · modo assistido</div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginTop: 14 }}>
          {stats.map((s) => (
            <div key={s.l} style={{ position: 'relative', background: '#fff', borderRadius: 14, padding: '11px 10px', border: '1px solid #E2E8F0' }}>
              {s.badge ? (
                <span style={{ position: 'absolute', top: -7, right: -5, fontSize: 10, fontWeight: 800, color: '#fff', background: '#DC2626', borderRadius: 999, padding: '2px 7px' }}>
                  {s.badge}
                </span>
              ) : null}
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 0.7, color: '#64748B' }}>{s.l}</div>
              <div style={{ fontSize: 17, fontWeight: 800, color: '#0F172A', marginTop: 3, fontVariantNumeric: 'tabular-nums' }}>{s.v}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 12, background: '#fff', borderRadius: 16, border: '1px solid #E2E8F0', padding: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#475569' }}>Código do produto</div>
          <Row style={{ gap: 8, marginTop: 8 }}>
            <div style={{ flex: 1, height: 42, borderRadius: 12, background: '#F1F5F9', display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: 13, color: '#94A3B8' }}>
              Bipe ou digite o código…
            </div>
            <div style={{ width: 84, height: 42, borderRadius: 12, background: '#0F766E', color: '#fff', fontSize: 13.5, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              + Add
            </div>
          </Row>
        </div>

        <Row style={{ margin: '14px 2px 8px', gap: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>Produtos lidos</span>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#0F766E', background: 'rgba(15,118,110,0.1)', borderRadius: 999, padding: '3px 9px' }}>3 itens</span>
        </Row>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {itens.map((it) => (
            <Row key={it.cod} style={{ background: '#fff', borderRadius: 14, border: '1px solid #E2E8F0', borderLeft: `4px solid ${it.edge}`, padding: '11px 13px', gap: 10 }}>
              <span style={{ width: 34, height: 34, borderRadius: 9, background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: it.edge, fontWeight: 800, fontSize: 14 }}>
                ✓
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: '#0F172A' }}>{it.n}</div>
                <span style={{ fontSize: 10.5, fontFamily: MONO, color: '#64748B', background: '#F1F5F9', borderRadius: 6, padding: '2px 6px' }}>{it.cod}</span>
              </div>
              <span style={{ fontSize: 14, fontWeight: 800, color: '#0F172A', fontVariantNumeric: 'tabular-nums' }}>{it.q}</span>
            </Row>
          ))}
        </div>
      </div>
      <div style={{ padding: '0 18px 28px' }}>
        <div style={{ height: 48, borderRadius: 12, background: '#0F766E', color: '#fff', fontSize: 15, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <span style={{ color: '#F4B860' }}>▮▮</span> Exportar conferência
        </div>
      </div>
    </div>
  );
}

/* ————————————————— TantaGrana — Home (estética Wise real) ————————————————— */

function TantaGranaScreen() {
  const txs = [
    { i: '🛒', d: 'Mercado Boa Vista', c: 'Nubank · Mercado', v: '-R$ 245,80', neg: true },
    { i: '💼', d: 'Pagamento cliente', c: 'Itaú · Receita', v: '+R$ 3.200,00', neg: false },
    { i: '⛽', d: 'Posto Shell', c: 'Nubank · Transporte', v: '-R$ 180,00', neg: true },
  ];
  return (
    <div style={{ ...screen, background: '#F7F6F2' }}>
      <StatusBar />
      <div style={{ padding: '6px 18px', flex: 1 }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: '#163300', letterSpacing: -0.5 }}>Início</div>

        <div style={{ marginTop: 12, background: '#fff', borderRadius: 16, border: '1px solid #EFEEE9', padding: 18 }}>
          <Row style={{ justifyContent: 'space-between' }}>
            <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: 0.9, color: '#7A8674' }}>SALDO TOTAL</span>
            <span style={{ fontSize: 14, color: '#9AA694' }}>›</span>
          </Row>
          <div style={{ fontSize: 30, fontWeight: 800, color: '#163300', letterSpacing: -0.6, marginTop: 6 }}>R$ 12.480,35</div>
          <Row style={{ marginTop: 14 }}>
            {[
              ['Receitas', 'R$ 8.420', '#0F8F4A'],
              ['Despesas', 'R$ 5.310', '#B23E2F'],
              ['Resultado', '+R$ 3.110', '#163300'],
            ].map(([l, v, c], i) => (
              <div key={l} style={{ flex: 1, borderLeft: i ? '1px solid #EFEEE9' : 'none', paddingLeft: i ? 12 : 0 }}>
                <div style={{ fontSize: 10, color: '#7A8674', fontWeight: 600 }}>{l}</div>
                <div style={{ fontSize: 13.5, fontWeight: 700, color: c as string, marginTop: 2 }}>{v}</div>
              </div>
            ))}
          </Row>
        </div>

        <Row style={{ marginTop: 12, background: '#163300', borderRadius: 16, padding: '14px 16px', gap: 12 }}>
          <span style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(159,232,112,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15 }}>
            ✦
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF' }}>Assistente</div>
            <div style={{ fontSize: 11.5, color: '#9FE870', marginTop: 1 }}>
              &ldquo;paguei 45,90 de mercado ontem no Nubank&rdquo;
            </div>
          </div>
          <span style={{ color: '#9FE870', fontSize: 15 }}>›</span>
        </Row>

        <Row style={{ margin: '16px 2px 8px', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#163300' }}>Últimas transações</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#0F8F4A' }}>Ver todas</span>
        </Row>
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #EFEEE9', overflow: 'hidden' }}>
          {txs.map((tx, i) => (
            <Row key={tx.d} style={{ padding: '12px 14px', gap: 11, borderTop: i ? '1px solid #F5F4EE' : 'none' }}>
              <span style={{ width: 34, height: 34, borderRadius: '50%', background: '#F5F4EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>
                {tx.i}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: '#163300' }}>{tx.d}</div>
                <div style={{ fontSize: 11, color: '#7A8674', marginTop: 1 }}>{tx.c}</div>
              </div>
              <span style={{ fontSize: 13.5, fontWeight: 700, color: tx.neg ? '#B23E2F' : '#0F8F4A', fontVariantNumeric: 'tabular-nums' }}>{tx.v}</span>
            </Row>
          ))}
        </div>
      </div>
      <div style={{ height: 82, background: '#fff', borderTop: '1px solid #EFEEE9', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-around', paddingTop: 9 }}>
        {[
          { i: '⌂', l: 'Início', on: true, fab: false },
          { i: '▤', l: 'Transações', on: false, fab: false },
          { i: '+', l: '', on: false, fab: true },
          { i: '◷', l: 'Pendentes', on: false, fab: false },
          { i: '⋯', l: 'Mais', on: false, fab: false },
        ].map((t, i) => (
          <div key={i} style={{ textAlign: 'center', color: t.on ? '#163300' : '#9AA694', minWidth: 52 }}>
            {t.fab ? (
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#163300', color: '#9FE870', fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: -16, boxShadow: '0 8px 18px rgba(22,51,0,0.3)' }}>
                +
              </div>
            ) : (
              <>
                <div style={{ fontSize: 17 }}>{t.i}</div>
                <div style={{ fontSize: 9.5, fontWeight: t.on ? 700 : 500, marginTop: 1 }}>{t.l}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ————————————————— 2aFinder — Resultado de busca ————————————————— ————————————————— */

function FindrScreen() {
  const lojas = [
    { n: 'Magazine Luiza', p: 'R$ 18.499', par: '12x R$ 1.541', trust: 92, best: true },
    { n: 'Amazon', p: 'R$ 18.890', par: '10x R$ 1.889', trust: 88, best: false },
    { n: 'Mercado Livre', p: 'R$ 19.240', par: '12x R$ 1.603', trust: 74, best: false },
  ];
  return (
    <div style={{ ...screen, background: '#FDFCFA' }}>
      <StatusBar />
      <div style={{ padding: '6px 18px', flex: 1 }}>
        <Row style={{ gap: 8 }}>
          <span style={{ fontSize: 19, fontWeight: 800, color: '#161616', letterSpacing: -0.5 }}>2a</span>
          <div style={{ flex: 1, height: 36, borderRadius: 10, background: '#F4F2EE', border: '1px solid #E7E4DD', display: 'flex', alignItems: 'center', padding: '0 11px', fontSize: 12.5, color: '#5C574E' }}>
            MacBook Pro M5 16GB
          </div>
        </Row>

        <Row style={{ gap: 6, marginTop: 12 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: '#fff', background: '#F3821D', borderRadius: 999, padding: '3px 9px' }}>
            FILTRO EXATO
          </span>
          <span style={{ fontSize: 10.5, color: '#7A7368' }}>3 ofertas · 1 variante</span>
        </Row>

        <div style={{ marginTop: 12, background: '#fff', borderRadius: 16, border: '1px solid #E7E4DD', padding: 14 }}>
          <div style={{ fontSize: 14.5, fontWeight: 700, color: '#161616', letterSpacing: -0.2 }}>
            MacBook Pro 14&quot; M5
          </div>
          <div style={{ fontSize: 11.5, color: '#7A7368', marginTop: 2 }}>16 GB · 512 GB · Apple</div>
          <Row style={{ gap: 5, marginTop: 9 }}>
            <span style={{ fontSize: 9.5, fontFamily: MONO, color: '#006D00', background: '#E8F5E9', borderRadius: 6, padding: '3px 7px', fontWeight: 700 }}>
              CATÁLOGO DO FABRICANTE
            </span>
          </Row>
          {/* histórico de 90 dias */}
          <div style={{ marginTop: 12, display: 'flex', alignItems: 'flex-end', gap: 2.5, height: 34 }}>
            {[19, 22, 20, 25, 23, 27, 24, 21, 18, 20, 17, 15, 16, 14].map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: h * 1.25,
                  borderRadius: 2,
                  background: i === 13 ? '#F3821D' : '#E7E4DD',
                }}
              />
            ))}
          </div>
          <Row style={{ justifyContent: 'space-between', marginTop: 6 }}>
            <span style={{ fontSize: 9.5, color: '#9A9287' }}>90 dias</span>
            <span style={{ fontSize: 9.5, fontWeight: 700, color: '#006D00' }}>menor preço do período</span>
          </Row>
        </div>

        <Row style={{ margin: '14px 2px 8px', gap: 7 }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, color: '#161616' }}>Onde comprar</span>
          <span style={{ fontSize: 9.5, fontFamily: MONO, color: '#7A7368' }}>coletado 14:02</span>
        </Row>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {lojas.map((l) => (
            <div
              key={l.n}
              style={{
                background: '#fff',
                borderRadius: 14,
                border: l.best ? '1.5px solid #F3821D' : '1px solid #E7E4DD',
                padding: '11px 13px',
              }}
            >
              <Row style={{ justifyContent: 'space-between' }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#161616' }}>{l.n}</span>
                <span style={{ fontSize: 14.5, fontWeight: 800, color: '#161616', fontVariantNumeric: 'tabular-nums' }}>
                  {l.p}
                </span>
              </Row>
              <Row style={{ justifyContent: 'space-between', marginTop: 5 }}>
                <Row style={{ gap: 4 }}>
                  <span style={{ width: 26, height: 4, borderRadius: 2, background: '#E7E4DD', overflow: 'hidden' }}>
                    <span style={{ display: 'block', width: `${l.trust * 0.26}px`, height: 4, background: l.trust > 85 ? '#006D00' : '#F3821D' }} />
                  </span>
                  <span style={{ fontSize: 9.5, fontFamily: MONO, color: '#7A7368' }}>confiança {l.trust}</span>
                </Row>
                <span style={{ fontSize: 10.5, color: '#7A7368' }}>{l.par}</span>
              </Row>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 14, background: '#FAF8F4', borderRadius: 14, border: '1px solid #E7E4DD', padding: '12px 13px' }}>
          <Row style={{ gap: 7 }}>
            <span style={{ width: 18, height: 18, borderRadius: 5, background: '#161616', color: '#fff', fontSize: 9.5, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              AI
            </span>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#161616' }}>Legível por agente</span>
          </Row>
          <div style={{ fontSize: 10.5, color: '#7A7368', marginTop: 6, lineHeight: 1.45 }}>
            Esta página publica os mesmos dados em schema.org — o assistente lê a oferta sem
            precisar raspar o HTML.
          </div>
          <Row style={{ gap: 5, marginTop: 9 }}>
            {['Product', 'Offer', 'AggregateRating'].map((tag) => (
              <span key={tag} style={{ fontSize: 9, fontFamily: MONO, color: '#5C574E', background: '#F1EDE6', borderRadius: 5, padding: '3px 6px' }}>
                {tag}
              </span>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

/* ————————————————— Transcribr — Gravação ————————————————— */

function TranscribrScreen() {
  const wave = [8, 16, 27, 19, 34, 22, 41, 30, 18, 26, 37, 21, 14, 29, 24, 33, 17, 25, 12, 20, 31, 15, 23, 36];
  const docs = [
    { t: 'Resumo', d: 'Prazo movido para 12/09; escopo do piloto fechado.', on: true },
    { t: 'Decisões', d: '3 decisões registradas', on: true },
    { t: 'Tarefas', d: '5 tarefas com responsável', on: false },
  ];
  return (
    <div style={{ ...screen, background: '#F6F3ED' }}>
      <StatusBar />
      <div style={{ padding: '6px 18px', flex: 1 }}>
        <Row style={{ justifyContent: 'space-between' }}>
          <span style={{ fontSize: 19, fontWeight: 700, color: '#211E19', letterSpacing: -0.4 }}>
            transcr<span style={{ color: '#E2A03F' }}>ı</span>br
          </span>
          <span style={{ fontSize: 10, fontFamily: MONO, color: '#8A8271' }}>MIC · 48 kHz</span>
        </Row>

        <div style={{ marginTop: 14, background: '#fff', borderRadius: 18, border: '1px solid #E7E1D5', padding: 18 }}>
          <Row style={{ gap: 7 }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: '#C0392B' }} />
            <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: 0.8, color: '#8A8271' }}>GRAVANDO</span>
          </Row>
          <div
            style={{
              fontSize: 40,
              fontWeight: 300,
              fontFamily: MONO,
              color: '#211E19',
              letterSpacing: -1.5,
              marginTop: 8,
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            01:42:07
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 2.5, height: 46, marginTop: 12 }}>
            {wave.map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: h,
                  borderRadius: 2,
                  background: i > 18 ? '#E2A03F' : '#C8C2B4',
                  opacity: i > 18 ? 1 : 0.85,
                }}
              />
            ))}
          </div>

          <Row style={{ gap: 6, marginTop: 12, padding: '8px 10px', background: '#F1EDE3', borderRadius: 10 }}>
            <span style={{ fontSize: 11, color: '#4A453B' }}>↑</span>
            <span style={{ fontSize: 10.5, color: '#4A453B' }}>
              Trecho salvo no servidor há <b>3s</b> · nada se perde
            </span>
          </Row>
        </div>

        <div style={{ fontSize: 12.5, fontWeight: 700, color: '#211E19', margin: '16px 2px 8px' }}>
          Documentos desta gravação
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {docs.map((d) => (
            <Row
              key={d.t}
              style={{
                background: '#fff',
                borderRadius: 14,
                border: '1px solid #E7E1D5',
                padding: '12px 13px',
                gap: 11,
              }}
            >
              <span
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 9,
                  background: d.on ? '#F5EBD8' : '#F1EDE3',
                  color: d.on ? '#E2A03F' : '#C8C2B4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  fontWeight: 800,
                }}
              >
                {d.on ? '✓' : '···'}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: '#211E19' }}>{d.t}</div>
                <div style={{ fontSize: 10.5, color: '#8A8271', marginTop: 1 }}>{d.d}</div>
              </div>
            </Row>
          ))}
        </div>
      </div>
      <div style={{ padding: '0 18px 28px' }}>
        <div
          style={{
            height: 48,
            borderRadius: 12,
            background: '#211E19',
            color: '#F6F3ED',
            fontSize: 15,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 9,
          }}
        >
          <span style={{ width: 11, height: 11, borderRadius: 2, background: '#E2A03F' }} /> Encerrar e gerar
        </div>
      </div>
    </div>
  );
}

export const SCREENS: Record<string, () => JSX.Element> = {
  tamarkado: TamarkadoScreen,
  xpid: XpidScreen,
  'layer-one': CamadaScreen,
  'roteiro-temporada': RoteiroScreen,
  strategile: StrategileScreen,
  'app-igreja': IgrejaScreen,
  'smart-scan': SmartScanScreen,
  tantagrana: TantaGranaScreen,
  '2afinder': FindrScreen,
  transcribr: TranscribrScreen,
};
