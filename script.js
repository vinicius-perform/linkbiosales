document.addEventListener("DOMContentLoaded", () => {
    // ==========================================================================
    // 💬 SIMULAÇÃO DE CHAT DO WHATSAPP (Lógica Interativa Realista)
    // ==========================================================================
    const statusEl = document.querySelector(".wa-contact-status");
    const response1 = document.getElementById("wa-response-1");
    const response2 = document.getElementById("wa-response-2");
    const chatContainer = document.getElementById("chat-messages");

    // Função auxiliar para rolar o chat para baixo suavemente
    const scrollToBottom = () => {
        chatContainer.scrollTo({
            top: chatContainer.scrollHeight,
            behavior: "smooth"
        });
    };

    // Iniciar sequência de simulação
    setTimeout(() => {
        // 1. Mostrar status "digitando..." do atendente dot.sales
        if (statusEl) statusEl.textContent = "Digitando...";
        
        setTimeout(() => {
            // 2. Revelar balão de resposta da IA
            if (response1) {
                response1.classList.remove("hidden");
                scrollToBottom();
            }
            if (statusEl) statusEl.textContent = "Online";
            
            // 3. Simular lead pensando/digitando e respondendo
            setTimeout(() => {
                if (response2) {
                    response2.classList.remove("hidden");
                    scrollToBottom();
                }
            }, 2500);

        }, 2200);

    }, 1500);

    // ==========================================================================
    // 🎮 EFEITO PARALLAX 3D NOS DISPOSITIVOS (Mouse Move Interaction)
    // ==========================================================================
    const container = document.querySelector(".mockup-container");
    const macbook = document.querySelector(".macbook-device");
    const iphone = document.querySelector(".iphone-device");

    if (container && macbook && iphone) {
        // Apenas ativar no desktop para melhor desempenho
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        if (!isTouchDevice) {
            container.addEventListener("mousemove", (e) => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left - (rect.width / 2); // Posição X em relação ao centro
                const y = e.clientY - rect.top - (rect.height / 2); // Posição Y em relação ao centro
                
                // Limitar rotação máxima
                const rotateXVal = 8 - (y * 0.05); // Eixo X
                const rotateYVal = -8 + (x * 0.05); // Eixo Y
                
                // MacBook acompanha o movimento com um fator menor
                macbook.style.transform = `rotateX(${rotateXVal}deg) rotateY(${rotateYVal}deg) translateY(${y * 0.02}px)`;
                
                // iPhone tem um efeito 3D ligeiramente mais forte e invertido para criar profundidade
                const iphoneRotateX = 8 - (y * 0.08);
                const iphoneRotateY = -8 + (x * 0.08);
                iphone.style.transform = `rotateX(${iphoneRotateX}deg) rotateY(${iphoneRotateY}deg) rotateZ(3deg) translate3d(${-x * 0.06}px, ${-y * 0.06}px, 20px)`;
                iphone.style.boxShadow = `${-15 - (x * 0.1)}px ${20 + (y * 0.1)}px 45px rgba(11, 16, 32, 0.35)`;
            });

            // Resetar posição quando o mouse sai da seção
            container.addEventListener("mouseleave", () => {
                macbook.style.transform = "";
                iphone.style.transform = "";
                iphone.style.boxShadow = "";
                
                // Re-adicionar as transições suaves
                macbook.style.transition = "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
                iphone.style.transition = "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
                
                setTimeout(() => {
                    macbook.style.transition = "";
                    iphone.style.transition = "";
                }, 800);
            });
        }
    }
});
