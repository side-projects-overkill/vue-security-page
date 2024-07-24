<template>
  <div class="cve-table-mainContainer">
    <div class="cve-table-subContainer">
      <p class="cve-table-title">Latest CVEs</p>
      <pf-table class="cve-table">
        <pf-thead class="cve-table-headings">
          <pf-tr>
            <pf-th>CVE</pf-th>
            <pf-th>Synopsis</pf-th>
            <pf-th>Impact</pf-th>
            <pf-th>Publish date</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tr v-for="data in tableData" :key="data.cve">
          <pf-td>
            <a>{{ data.cve }}</a>
          </pf-td>
          <pf-td>{{ data.synopsis }}</pf-td>
          <pf-td
            ><div class="impact-title-child">{{ data.impact }}</div></pf-td
          >
          <pf-td>{{ data.publishDate }}</pf-td>
        </pf-tr>
      </pf-table>
    </div>
  </div>
</template>

<script setup>
  const tableData = [
    {
      cve: 'CVE-2024-41184',
      synopsis:
        'In the vrrp_ipsets_handler handler (fglobal_parser.c) of keepalived through 2.3.1, an integer overflow can occur. NOTE: this CVE Record might not be worthwhile because an empty ipset name must be...',
      impact: 'Moderate',
      publishDate: '7/18/2024',
    },
    {
      cve: 'CVE-2023-7272',
      synopsis:
        'In Eclipse Parsson before 1.0.4 and 1.1.3, a document with a large depth of nested objects can allow an attacker to cause a Java stack overflow exception and denial of service. Eclipse Parsson allows...',
      impact: 'Moderate',
      publishDate: '7/17/2024',
    },
    {
      cve: 'CVE-2024-41009',
      synopsis:
        'In the Linux kernel, the following vulnerability has been resolved: bpf: Fix overrunning reservations in ringbuf The BPF ring buffer internally is implemented as a power-of-2 sized circular buffer, with two...',
      impact: 'Moderate',
      publishDate: '7/17/2024',
    },
    {
      cve: 'CVE-2024-41010',
      synopsis:
        'In the Linux kernel, the following vulnerability has been resolved: bpf: Fix too early release of tcx_entry Pedro Pinto and later independently also Hyunwoo Kim and Wongi Lee reported an issue that the...',
      impact: 'Moderate',
      publishDate: '7/17/2024',
    },
    {
      cve: 'CVE-2024-6535',
      synopsis:
        'A flaw was found in Skupper. When Skupper is initialized with the console-enabled and with console-auth set to Openshift, it configures the openshift oauth-proxy with a static cookie-secret. In certain...',
      impact: 'Moderate',
      publishDate: '7/17/2024',
    },
  ]
</script>

<style scoped>
  .cve-table-mainContainer {
    position: relative;
    background: #f3f3f3;
    margin-top: 64px;
    padding: 32px 0px;
  }

  .cve-table-subContainer {
    max-width: 1440px;
    margin: auto;
    padding: 0px 32px;
  }

  pf-th,
  pf-td {
    padding-left: 0px;
  }

  pf-tr {
    display: grid;
    grid-template-columns: 2fr 6fr 2fr 2fr;
  }

  .cve-table-title {
    font-size: 24px;
    font-weight: 500;
  }

  .cve-table-headings pf-th {
    font-size: 16px;
    font-weight: 500;
  }

  .impact-title-child {
    background-color: rgb(245, 193, 46);
    color: rgb(0, 41, 82);
    padding: 1px 7px;
    width: min-content;
  }

  @media screen and (max-width: 768px) {
    .cve-table {
      min-width: 700px;
    }

    .cve-table-subContainer {
      overflow-x: scroll;
    }

    .cve-table-headings {
      display: block;
      visibility: visible;
    }
  }
</style>
