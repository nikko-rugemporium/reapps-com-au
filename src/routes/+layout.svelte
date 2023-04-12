
<script> 
import "../app.css"; 
import Header from '../lib/components/+header.svelte';
import Footer from '../lib/components/+footer.svelte';
import Sidebar from '../lib/components/+sidebar.svelte';
</script>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RE Apps by Rug Emporium</title>
</head>
<body>
    <Sidebar />
    <main class="p-4 sm:ml-64">
        <div class="p-2">
            <slot />
        </div>
    </main>
    
    <Footer />
</body>
</html>
