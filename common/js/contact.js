document.addEventListener('DOMContentLoaded', () => {
    // フォームの要素を取得
    const officeInput = document.getElementById('office');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const textareaInput = document.getElementById('textarea');

    // 確認画面の要素を取得
    const confirmOffice = document.getElementById('confirm_office');
    const confirmName = document.getElementById('confirm_name');
    const confirmEmail = document.getElementById('confirm_email');
    const confirmMessage = document.getElementById('confirm_message');

    // ボタンを取得
    const submitBtn = document.getElementById('submit_btn'); // 内容を確認する
    const returnBtn = document.getElementById('return_btn'); // 戻る
    const sendBtn = document.getElementById('send_btn'); // 送信する

    // フォームと確認画面のDOMを取得
    const form = document.querySelector('.contact_form'); // 入力フォーム
    const confirmationScreen = document.querySelector('.confirmation_screen'); // 確認画面
    const submitscreen = document.querySelector('.submit_screen'); // 確認画面

    // stepボタン
    const step1btn = document.querySelector('.step1');
    const step2btn = document.querySelector('.step2');
    const step3btn = document.querySelector('.step3');

    // 内容を確認するボタンのクリックイベント
    submitBtn.addEventListener('click', (event) => {
        event.preventDefault(); // フォーム送信を防止


        // 必須項目チェック
        if (!officeInput.value.trim()) {
            alert('会社名を入力してください');
            return;
        }
        if (!nameInput.value.trim()) {
            alert('担当者名を入力してください');
            return;
        }
        if (!emailInput.value.trim()) {
            alert('メールアドレスを入力してください');
            return;
        }

        // 入力内容を確認画面に表示
        confirmOffice.textContent = officeInput.value.trim();
        confirmName.textContent = nameInput.value.trim();
        confirmEmail.textContent = emailInput.value.trim();
        confirmMessage.textContent = textareaInput.value.trim();

        // フォームを非表示にして確認画面を表示
        form.style.display = 'none';
        confirmationScreen.style.display = 'block';

        // step2にactiveを追加
        step2btn.classList.add('active');
    });

    // 戻るボタンのクリックイベント
    returnBtn.addEventListener('click', () => {
        confirmationScreen.style.display = 'none'; // 確認画面を非表示
        form.style.display = 'block'; // フォームを表示
        //activeを削除
        step2btn.classList.remove('active');
    });

    // 送信するボタンのクリックイベント
    sendBtn.addEventListener('click', () => {
        //alert('送信が完了しました！');
        //window.location.reload(); // ページをリロード
        // フォームを非表示にして確認画面を表示
        confirmationScreen.style.display = 'none'; // 確認画面を非表示
        form.style.display = 'none'; // フォームを非表示
        submitscreen.style.display = 'block';// 送信完了画面表示
        console.log("送信完了ボタンが押されました");
        // step3にactiveを追加
        step3btn.classList.add('active');

    });


});