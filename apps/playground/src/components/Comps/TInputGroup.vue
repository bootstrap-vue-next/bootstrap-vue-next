<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <BInputGroup prepend="@" class="mb-3">
          <BFormInput placeholder="Username" />
        </BInputGroup>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BInputGroup append="@example.com" class="mb-3">
          <BFormInput placeholder="Recipient's username" />
        </BInputGroup>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <label>Your vanity URL</label>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BInputGroup prepend="https://example.com/users/" class="mb-3">
          <BFormInput />
        </BInputGroup>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <BInputGroup prepend="$" append=".00" class="mb-3">
          <BFormInput />
        </BInputGroup>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BInputGroup class="mb-3">
          <BFormInput placeholder="Username" />
          <BInputGroupText>@</BInputGroupText>
          <BFormInput placeholder="Server" />
        </BInputGroup>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <BInputGroup class="mb-3" prepend="With textarea">
          <textarea class="form-control" />
        </BInputGroup>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h4>Input Group Sizes</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BInputGroup prepend="Small" size="sm" class="mb-3">
          <BFormInput />
        </BInputGroup>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <BInputGroup prepend="Default" class="mb-3">
          <BFormInput />
        </BInputGroup>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <BInputGroup prepend="Large" size="lg" class="mb-3">
          <BFormInput />
        </BInputGroup>
      </BCol>
    </BRow>
  </BContainer>
</template>
